import { HttpService } from './httpService'
import {SocialProviderTypes} from './socialProviderTypes'
import {AuthorizeService} from './services/authorizeService.ts'

// inversify.decorate(inversify.injectable(), Katana);

/**
 * Register firestore client dependecies
 * @param container DI container
 */
export const useDjangoClient = (container) => {
  container.bind(SocialProviderTypes.HttpService).to(HttpService),
  container.bind(SocialProviderTypes.AuthorizeService).to(AuthorizeService)


}
