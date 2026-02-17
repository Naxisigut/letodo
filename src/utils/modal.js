
import { useModal, useModalSlot } from 'vue-final-modal';
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
      onWrapperClose() {
        close()
      },
    },
    slots: {
      default: useModalSlot({
        component: cpnt,
        attrs: {
          onClose() {
            close()
          },
        },
      }),
    },
  })

  return { open, close }
}