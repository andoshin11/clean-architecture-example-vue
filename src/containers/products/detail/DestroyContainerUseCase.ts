import BaseUseCase from '@/usecases/BaseUseCase'
import ProductRepository from '@/repositories/ProductRepository'

export interface IDestroyContainerUseCase {
  productRepository: ProductRepository;
}

export default class DestroyContainerUseCase implements BaseUseCase {
  productRepository: ProductRepository;

  constructor({ productRepository }: IDestroyContainerUseCase) {
    this.productRepository = productRepository
  }

  async execute() {
    this.productRepository.clearItem()
    return
  }
}
