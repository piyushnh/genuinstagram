import { SocialProviderTypes } from "../socialProviderTypes";
import { injectable, inject } from "inversify";

@injectable()
export class NotificationService {
  constructor() {}
  @inject(SocialProviderTypes.HttpService) httpService;

  setFCMToken = async token => {
    try {
      const result = await this.httpService.postWithAuth(
        `notification/setFCMToken/`,
        { registration_token: token }
      );
      if (result.status === 200) {
        return {
          success: true
        };
      } else {
        return {
          mssg: "Unable to set FCM Token",
          success: false,
          data: null
        };
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getNotifications = async token => {
    try {
      const result = await this.httpService.getWithAuth(
        `notification/getNotifications/`
      );
      if (result.status === 200) {
        return {
          success: true,
          data: result.data
        };
      } else {
        return {
          mssg: "Unable to set FCM Token",
          success: false,
          data: null
        };
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
