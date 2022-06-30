import create from 'zustand'

const useStore = create(() => {
  return {
    router: null,
    dom: null,
    theme: 'light',
    ink: 'light'
  }
})

export default useStore
