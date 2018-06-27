import BaseUseCase from '@/usecases/BaseUseCase'
import BaseService from '@/services/BaseService'
import BaseRepository from '@/repositories/BaseRepository'

export interface IProductsDetailPageUseCase {
  productRepository: BaseRepository;
  id: number
  errorService: BaseService
}

export default class ProductsDetailPageUseCase implements BaseUseCase {
  productRepository: BaseRepository
  id: number
  errorService: BaseService

  constructor({ productRepository, id, errorService }: IProductsDetailPageUseCase) {
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
