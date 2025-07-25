import { GetAllProductsUseCase } from '../getAllProducts.usecase';
import { IProductRepository } from '../../../core/interfaceRepositories/product/product.repository.interface';
import { Product } from '../../../core/entities/product/product.entity';

describe('GetAllProductsUseCase', () => {
  let useCase: GetAllProductsUseCase;
  let mockProductRepo: jest.Mocked<IProductRepository>;

  beforeEach(() => {
    // Tạo một mock cho productRepo
    mockProductRepo = {
      getAllProducts: jest.fn(),
      // Các method khác của IProductRepository nếu có, để tránh lỗi TypeScript
    } as unknown as jest.Mocked<IProductRepository>;

    // Khởi tạo UseCase với mock đã tạo
    useCase = new GetAllProductsUseCase(mockProductRepo);
  });

  it('should return all products from repository', async () => {
    // Giả lập dữ liệu trả về
    const mockProducts: Product[] = [
      { id: 1, name: 'Product 1', price: 100 } as unknown as Product,
      { id: 2, name: 'Product 2', price: 200 } as unknown as Product,
    ];

    mockProductRepo.getAllProducts.mockResolvedValue(mockProducts);

    // Gọi use case
    const result = await useCase.execute();

    // So sánh kết quả
    expect(result).toEqual(mockProducts);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockProductRepo.getAllProducts).toHaveBeenCalled(); // Kiểm tra hàm mock được gọi
  });
});
