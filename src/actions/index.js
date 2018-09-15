export const editDescription = description => ({
  type: 'EDIT_DESCRIPTION',
  description
})

export const editAttributes = attribute => ({
  type: 'EDIT_ATTRIBUTES',
  attribute
})

export const editProvided = provided => ({
  type: 'EDIT_PROVIDED',
  provided
})

export const editRequire = required =>({
  type: 'EDIT_REQUIRED',
  required
})
