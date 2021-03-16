import { classDetailsModel } from "@data"

const classDetailsEntity = () => {
  return classDetailsModel.map(item => {
    return {
      imageURL: item.imageURL,
      title: item.title,
      text: item.text,
    }
  })
}

export default classDetailsEntity
