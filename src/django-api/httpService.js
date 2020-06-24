import { injectable } from 'inversify'
import { inject } from 'inversify'
import axios from 'axios'
import config from '../env-config'
import {store} from '../store/store'


@injectable()
export class HttpService {

    // @inject(SocialProviderTypes.PermissionService) private _permissionService: IPermissionService

    
    constructor(
    ) {
        this.get = this.get.bind(this)
        this.post = this.post.bind(this)
    }

    /**
     * Http GET
     */
    async getWithAuth(url, params) {
        // const validURL = config.settings.prettyURL ? url : (config.rewrites[url] || url)
        const validURL = url
        const requestURL = `${config.settings.api}${validURL}`
        console.log(store)
        let authToken = store.getState().Authentication.details.authToken
        const axiosConfig = {
            headers: {
                'Authorization': `Token ${authToken}`
            }
        }
        return await axios
            .get(`${config.settings.api}${validURL}`, axiosConfig)
            .then((result) => {
                return result
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    error = error.response
                }

                throw error

            })
    }

    /**
     * Http POST
     */
  async postWithAuth(url, payload) {
        // const validURL = config.settings.prettyURL ? url : (config.rewrites[url] || url)
        const validURL = url
        let authToken = store.getState().Authentication.details.authToken
        const axiosConfig = {
            headers: {
                'Authorization': `Token ${authToken}`,
                 
            }
        }

        return await axios
            .post(`${config.settings.api}${validURL}`, payload, axiosConfig)
            .then((result) => {
                return result
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    error = error.response
                }

                throw error

            })

    }

        /**
     * Http POST
     */
  async postFileWithAuth(url, payload) {
        // const validURL = config.settings.prettyURL ? url : (config.rewrites[url] || url)
        const validURL = url
        let authToken = store.getState().Authentication.details.authToken
        const axiosConfig = {
            headers: {
                'Authorization': `Token ${authToken}`,
                 'accept': 'application/json',
                 'Content-Type': `multipart/form-data; boundary=${payload._boundary}`,
            }
        }

        return await axios
            .post(`${config.settings.api}${validURL}`, payload, axiosConfig)
            .then((result) => {
                return result
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    error = error.response
                }

                throw error

            })

    }
    /**
     * Http GET
     */
    async get(url, params) {
        // const validURL = config.settings.prettyURL ? url : (config.rewrites[url] || url)
        const validURL = url
        const requestURL = `${config.settings.api}${validURL}`
        // const result = await axios
        //     .get(requestURL)
        return await axios
            .get(`${config.settings.api}${validURL}`)
            .then((result) => {
                return result.data
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    error = error.response
                }

                throw error

            })
    }

    /**
     * Http POST
     */
    async post(url, payload) {
        // const validURL = config.settings.prettyURL ? url : (config.rewrites[url] || url)
        const validURL = url
        // const result = await axios
        //     .post(`${config.settings.api}${validURL}`, payload)
        return await axios
            .post(`${config.settings.api}${validURL}`, payload)
            .then((result) => {
                return result
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    error = error.response
                }

                throw error

            })
    }



    /**
     * Http POST File
     */
    // public async postFile(url: string,
    //     payload: any,
    //     fileName: string,
    //     onProgress: (percentage: number, status: boolean, fileName: string, meta?: any) => void) {

    //     const validURL = config.settings.prettyURL ? url : (config.rewrites[url] || url)
    //     var reqConfig = {
    //         onUploadProgress: function (progressEvent: any) {
    //             var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    //             onProgress(percentCompleted, true, fileName)
    //         }
    //     };

    //     try {
    //         const result = await axios
    //             .post(`${config.settings.api}${validURL}`, payload, reqConfig)
    //         return result.data
    //     } catch (error) {
    //         console.log(error)
    //         // let errorData = new SocialError('HttpService/WrongSetting', 'Error happened!')
    //         let errorData = { 'code': '', 'message': '' }


    //         if (error.response) {
    //             // The request was made and the server responded with a status code
    //             // that falls out of the range of 2xx
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //             const { data } = error.response
    //             if (data.isError) {
    //                 errorData.code = data.code
    //                 errorData.message = data.message
    //             } else if (error.response.status == 413) {
    //                 errorData.code = 'HttpService/LargeFile'
    //                 errorData.message = `The file is too large.`
    //             } else {
    //                 errorData.code = 'HttpService/PostFile/Error'
    //                 errorData.message = `The request was made and the server responded with a status code that falls out of the range of 2xx`
    //             }


    //         } else if (error.request) {
    //             // The request was made but no response was received
    //             // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //             // http.ClientRequest in node.js
    //             console.log(error.request);

    //             errorData.code = 'HttpService/NoResponse'
    //             errorData.message = `
    //         The request was made but no response was received
    //         error.request is an instance of XMLHttpRequest in the browser and an instance of
    //         http.ClientRequest in node.js
    //         `

    //         } else {
    //             // Something happened in setting up the request that triggered an Error
    //             console.log('Error', error.message);
    //             errorData.code = 'HttpService/PostFile/Unexpected'
    //             errorData.message = `
    //         Something happened in setting up the request that triggered an Error
    //         `
    //         }
    //         console.log(error.config);
    //         throw error
    //     }
    // }



    // /**
    //  * Http PUT
    //  */
    // public async put(url: string, payload?: any) {
    //     const validURL = config.settings.prettyURL ? url : (config.rewrites[url] || url)
    //     const requestURL = `${config.settings.api}${validURL}`
    //     const result = await axios
    //         .put(requestURL,
    //             payload)
    //     return result.data
    // }

    // /**
    //  * Http DELETE
    //  */
    // public async delete(url: string) {
    //     const validURL = config.settings.prettyURL ? url : (config.rewrites[url] || url)
    //     const requestURL = `${config.settings.api}${validURL}`
    //     const result = await axios
    //         .delete(requestURL)
    //     return result.data
    // }

    /**
     * Http get by token id
     */
    async getWithoutAuth(url) {
        // await this._permissionService.getIdToken()
        const validURL = config.settings.prettyURL ? url : (config.rewrites[url] || url)
        const result = await axios
            .get(`${config.settings.api}${validURL}`)
        return result.data
    }

    /**
     * Http Post by token id
     */
    async postWithoutAuth(url, payload) {
        try {
            const result = await axios
                .post(`${config.settings.api}${url}`,
                    payload
                )
            return result.data

        } catch (error) {
            console.log(error)
            // let errorData = new SocialError('HttpService/WrongSetting', 'Error happened!')
            let errorData = { 'code': '', 'message': '' }

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                const { data } = error.response
                if (data.isError) {
                    errorData.code = data.code
                    errorData.message = data.message
                } else {
                    errorData.code = 'HttpService/PostWithoutAuth'
                    errorData.message = `The request was made and the server responded with a status code that falls out of the range of 2xx`
                }


            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);

                errorData.code = 'HttpService/postWithoutAuth/NoResponse'
                errorData.message = `
                The request was made but no response was received
                error.request is an instance of XMLHttpRequest in the browser and an instance of
                http.ClientRequest in node.js
                `

            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                errorData.code = 'HttpService/postWithoutAuth/WrongSetting'
                errorData.message = `
                Something happened in setting up the request that triggered an Error
                `
            }
            console.log(error.config);
            throw error

        }
    }

}