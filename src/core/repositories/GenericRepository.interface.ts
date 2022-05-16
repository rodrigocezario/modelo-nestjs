export interface IGenericRepository<T> {
    save(obj: T): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
    deleteById(id: number): Promise<void>;
    update(id: number, obj: T): Promise<T>;
}