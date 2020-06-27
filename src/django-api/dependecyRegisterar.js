import { HttpService } from './httpService'
import {SocialProviderTypes} from './socialProviderTypes'
import {AuthorizeService} from './services/authorizeService.ts'
import {PostService} from './services/postService.ts'
import {UserService} from './services/userService.ts'
import {FriendService} from './services/friendService.ts'

// inversify.decorate(inversify.injectable(), Katana);

/**
 * Register firestore client dependecies
 * @param container DI container
 */
export const useDjangoClient = (container) => {
  container.bind(SocialProviderTypes.HttpService).to(HttpService),
  container.bind(SocialProviderTypes.AuthorizeService).to(AuthorizeService)
  container.bind(SocialProviderTypes.PostService).to(PostService)
  container.bind(SocialProviderTypes.UserService).to(UserService)
  container.bind(SocialProviderTypes.FriendService).to(FriendService)


}
