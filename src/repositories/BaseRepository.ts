type BaseRepository = {
  fetchItems?: (params?: any) => Promise<any>
  saveItems?: (params?: any) => void
  clearItems?: () => void
}

export default BaseRepository
