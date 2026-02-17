import { readonly, ref } from 'vue'
import { supabase } from '@/utils/superbase';
import { toast } from 'vue-sonner'

const allCates = ref([])
async function getAllCates() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return
  }
  const res = await supabase
    .from('categories')
    .select('*')
    .eq('user_id', user.id)
  console.log('cates', res)
  if (res.error) {
    toast.error('获取分类失败:' + cates.error.message)
    return
  }
  allCates.value = res.data
}
export const useAllCates = () => {
  return {
    set(value) {
      allCates.value = value
    },
    get() {
      return readonly(allCates)
    },
    refresh() {
      getAllCates()
    }
  }
}



function getGlobal() {
  getAllCates()
}
getGlobal()
