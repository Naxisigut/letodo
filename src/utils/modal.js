
import { useModal } from 'vue-final-modal';
import LodoModalWrapper from '@/components/LodoModalWrapper.vue'


export function useLodoModal(params) {
  const {
    title,
    cpnt,
    keepAlive = false,
    showConfirm = false,
  } = params
  const { open, close } = useModal({
    component: LodoModalWrapper,
    keepAlive,
    attrs: {
      title,
      showConfirm,
      onInnerClose() {
        close()
      },
    },
    slots: {
      default: cpnt,
    },
  })

  return { open, close }
}