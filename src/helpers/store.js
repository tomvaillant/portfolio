import create from 'zustand'

const useStore = create(() => {
  return {
    router: null,
    dom: null,
    theme: 'light',
    ink: 'light',
    test: false,
  }
})

export default useStore
