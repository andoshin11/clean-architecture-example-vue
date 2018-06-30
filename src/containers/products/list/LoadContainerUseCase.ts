import BaseUseCase from '@/usecases/BaseUseCase'
import ErrorService from '@/services/ErrorService'
import ProductRepository from '@/repositories/ProductRepository'
import { IProductsCriteria } from '@/entities/Product'

export interface ILoadContainerUseCase {
  productRepository: ProductRepository;
  request: PaginationRequest<IProductsCriteria>
  errorService: ErrorService
}

export default class LoadContainerUseCase implements BaseUseCase {
  productRepository: ProductRepository;
  request: PaginationRequest<IProductsCriteria>
  errorService: ErrorService

  constructor({ productRepository, request, errorService }: ILoadContainerUseCase) {
    this.productRepository = productRepository
    this.request = request
    this.errorService = errorService
  }

  async execute() {
    try {
      const data = await this.productRepository.fetchItems(this.request)
      this.productRepository.saveItems(data)
    } catch(e) {
      await this.errorService.handle(e)
    }
    return
  }
}
