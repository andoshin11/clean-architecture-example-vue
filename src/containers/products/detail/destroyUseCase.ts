import BaseUseCase from '@/usecases/BaseUseCase'
import BaseRepository from '@/repositories/BaseRepository'

export interface IProductsDetailPageDestroyUseCase {
  productRepository: BaseRepository;
}

export default class ProductsDetailPageDestroyUseCase implements BaseUseCase {
  productRepository: BaseRepository;

  constructor({ productRepository }: IProductsDetailPageDestroyUseCase) {
    this.productRepository = productRepository
  }

  async execute() {
    await this.productRepository.clearItem()
    return
  }
}
