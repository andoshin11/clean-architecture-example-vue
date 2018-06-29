import BaseUseCase from '@/usecases/BaseUseCase'
import ErrorService from '@/services/ErrorService'
import ProductRepository from '@/repositories/ProductRepository'

export interface ILoadContainerUseCase {
  productRepository: ProductRepository
  id: number
  errorService: ErrorService
}

export default class LoadContainerUseCase implements BaseUseCase {
  productRepository: ProductRepository
  id: number
  errorService: ErrorService

  constructor({ productRepository, id, errorService }: ILoadContainerUseCase) {
    this.productRepository = productRepository
    this.id = id
    this.errorService = errorService
  }

  async execute() {
    try {
      const data = await this.productRepository.fetchItem(this.id)
      this.productRepository.saveItem(data)
    } catch(e) {
      await this.errorService.handle(e)
    }
    return
  }
}
