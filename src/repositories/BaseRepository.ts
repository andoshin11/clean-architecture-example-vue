type BaseRepository = {
  fetchItems?: (params?: any) => Promise<any>
  saveItems?: (params?: any) => void
}

export default BaseRepository
