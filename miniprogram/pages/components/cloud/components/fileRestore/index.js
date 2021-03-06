// pages/components/cloud/components/fileRestore/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        imgUrl: ''
    },

    lifetimes: {
        async created() {
            await this.getImg()
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 文件存储 获取已上传文件
        async getImg() {
            const DEFAULT_IMG_URL = '/resource/cat.jpg'

            const event = {
                envID: getApp().globalData.envID,
                openid: getApp().globalData.openid,
                action: 'get'
            }
            try {
                const res = await wx.cloud.callFunction({
                    name: 'fileRestore',
                    data: event
                    })
                const data = res.result.data
                this.setData({
                    imgUrl: (data[0] && data[0].fileID) || DEFAULT_IMG_URL 

                })
            } catch(e) {
                console.error(e)
                this.setData({
                    imgUrl: DEFAULT_IMG_URL
                })
            }
        },

        // 文件存储 更换图片
        async updateImg() {
            // 需用户登录 用户 openid 作为存储索引
            const openid = getApp().globalData.openid
            if(!openid) {
                wx.navigateTo({
                    url: '/pages/login/login'
                })
                return
            }
            wx.chooseImage({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success: async res => {
                    let fileID = this.data.imgUrl
                    await deleteFile(fileID) // 删除已有文件
                    const filePath = res.tempFilePaths[0]
                    const cloudPath = `${openid}-${(new Date).getTime()}`
                    fileID = await uploadFile(cloudPath, filePath) // 上传新文件
                    await updateFileID(fileID) // 数据库中更新文件 ID
                }
            })

            // 上传文件到云存储
            const uploadFile = async (cloudPath, filePath) => {
                const res = await wx.cloud.uploadFile({
                    cloudPath,
                    filePath
                })
                const fileID = res.fileID
                this.setData({
                    imgUrl: fileID
                })
                return fileID
            }
            // 从云存储中删除文件
            const deleteFile = async fileID => {
                let res =  await wx.cloud.deleteFile({
                    fileList: [fileID]
                })
            }
            // 云数据库中更新对应用户上传的文件
            const updateFileID = async newFileID => {
                const event = {
                    envID: getApp().globalData.envID,
                    openid: getApp().globalData.openid,
                    action: 'update',
                    fileID: newFileID
                }
                await wx.cloud.callFunction({
                    name: 'fileRestore',
                    data: event
                })
            }
        },

        async deleteImg(){
        let res =  await wx.cloud.deleteFile({
            fileList: [this.data.imgUrl]
        })
        const event = {
            envID: getApp().globalData.envID,
            openid: getApp().globalData.openid,
            action: 'delete',
        }
        await wx.cloud.callFunction({
            name: 'fileRestore',
            data: event
        })
        await this.getImg()
        console.log(res)
        }
        }
})
