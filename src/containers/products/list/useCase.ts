import BaseUseCase from '@/usecases/BaseUseCase'
import BaseService from '@/services/BaseService'
import BaseRepository from '@/repositories/BaseRepository'
import { IProductsCriteria } from '@/entities/Product'

export interface IProductsListPageUseCase {
  productRepository: BaseRepository;
  request: PaginationRequest<IProductsCriteria>
  errorService: BaseService
}

export default class ProductsListPageUseCase implements BaseUseCase {
  productRepository: BaseRepository;
  request: PaginationRequest<IProductsCriteria>
  errorService: BaseService

  constructor({ productRepository, request, errorService }: IProductsListPageUseCase) {
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
