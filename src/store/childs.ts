import { create } from "zustand";
import type { IChild } from "../interface/child";
import { addNewChildApi, deleteChildApi, editChildApi, getAllChildsDb } from "../utils/api";
import { toast } from "react-toastify";

interface IChildStore {
  childsList: IChild[],
  childToEdit: IChild | null,
  deleteChildId: number | null,
  setChildsList: (child: IChild) => void,
  getAllChilds: () => void,
  setChildToEdit: (child: IChild | null) => void
  editChildDb: (child: IChild) => void,
  deleteChildDb: (idChild: number) => void,
  setDeleteChildId: (idChild: number | null) => void
}

export const useChildStore = create<IChildStore>((set, get) => ({
  childsList: [],
  childToEdit: null,
  deleteChildId: null,
  setChildsList: async (child: IChild) => {
    const { name, characteristics } = child
    const childsState = get().childsList
    const body = {
      name,
      bondad: characteristics[0].value,
      paciencia: characteristics[1].value,
      respeto: characteristics[2].value,
      esfuerzo: characteristics[3].value,
      trabajoEnEquipo: characteristics[4].value,
    }
    const newChild = await addNewChildApi(body)
    if (newChild.error) {
      toast.error(newChild.msg, {
        icon: false
      })
      return
    }
    set({ childsList: [newChild.child, ...childsState] })

  },
  getAllChilds: async () => {
    const childs = await getAllChildsDb()
    set({ childsList: childs })
  },
  setChildToEdit: (child: IChild | null) => { set({ childToEdit: child }) },
  editChildDb: async (child: IChild) => {
    const state = get()
    const { characteristics } = child
    const body = {
      ...child,
      bondad: characteristics[0].value,
      paciencia: characteristics[1].value,
      respeto: characteristics[2].value,
      esfuerzo: characteristics[3].value,
      trabajoEnEquipo: characteristics[4].value,
    }
    const childEdited = await editChildApi(body)
    console.log({ childEdited })
    if (childEdited.error) {
      toast.error(childEdited.msg, {
        icon: false
      })
      return
    }
    const newListChilds = state.childsList.map((childTemp) => childTemp.idChild === child.idChild ? childEdited.child : childTemp)
    console.log(newListChilds)
    set({
      childsList: newListChilds,
      childToEdit: null
    })

    toast.success(childEdited.msg, {
      icon: false
    })
  },
  deleteChildDb: async (idChild: number) => {
    const state = get()
    const childDeleted = await deleteChildApi(idChild)
    if (childDeleted.error) {
      toast.error(childDeleted.msg, {
        icon: false
      })
      return
    }
    const newListChilds = state.childsList.filter((childTemp) => childTemp.idChild !== idChild)
    set({ childsList: newListChilds })

    toast.success(childDeleted.msg, {
      icon: false
    })
  },
  setDeleteChildId: (idChild: number | null) => {
    set({ deleteChildId: idChild })
  }
}))