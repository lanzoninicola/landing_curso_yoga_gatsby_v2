import { bioModel } from "@data"
const bioEntity = () => {
  function all() {
    const contentCategories = getContentCategories()
    return contentCategories.map(category => {
      let bioItem = filterModel(category)
      let bioContentResult = buildContentResult(bioItem)
      return bioContentResult
    })
  }

  function getContentCategories() {
    let categoriesArray = []
    bioModel.forEach(item => categoriesArray.push(item.category))
    return categoriesArray
  }

  function filterModel(value) {
    const bioFiltered = bioModel.filter(item => item.category === value)
    return bioFiltered[0]
  }

  function buildContentResult(contentItem) {
    if (
      contentItem.category === "universidade" ||
      contentItem.category === "yoga_kundalini"
    ) {
      contentItem = { ...contentItem, shouldExpand: false, expanded: true }
    } else {
      contentItem = { ...contentItem, shouldExpand: true, expanded: false }
    }

    return {
      ...contentItem,
    }
  }

  return {
    all: () => all(),
    categories: () => getContentCategories(),
  }
}

export default bioEntity
