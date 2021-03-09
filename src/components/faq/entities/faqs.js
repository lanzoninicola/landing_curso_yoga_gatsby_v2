import faqsModel from "../models/faqs"

const faqsEntity = () => {
  return faqsModel.map(item => {
    return {
      title: item.title,
      text: item.text,
      showAnswer: false,
    }
  })
}

export default faqsEntity
