import create from 'zustand'

const useStore = create(() => {
  return {
    router: null,
    dom: null,
    theme: 'dark',
    ink: 'dark',
    test: false,
  }
})

export default useStore
