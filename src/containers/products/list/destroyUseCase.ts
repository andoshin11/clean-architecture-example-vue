import BaseUseCase from '@/usecases/BaseUseCase'
import BaseRepository from '@/repositories/BaseRepository'

export interface IProductsListPageDestroyUseCase {
  productRepository: BaseRepository;
}

export default class ProductsListPageDestroyUseCase implements BaseUseCase {
  productRepository: BaseRepository;

  constructor({ productRepository }: IProductsListPageDestroyUseCase) {
    this.productRepository = productRepository
  }

  async execute() {
    await this.productRepository.clearItems()
    return
  }
}
