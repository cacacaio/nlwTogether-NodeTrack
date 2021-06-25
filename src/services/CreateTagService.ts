import { TagsRepositories } from '../repositories/TagsRepositories'
import { getCustomRepository } from 'typeorm'

class CreateTagService {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepositories)
    if (!name) {
      throw new Error('Name Incorrect')
    }
    const tagExists = await tagsRepository.findOne({
      name,
    })
    if (tagExists) {
      throw new Error('Tag Already Exists')
    }

    const tag = tagsRepository.create({
      name,
    })

    await tagsRepository.save(tag)

    return tag
  }
}

export { CreateTagService }
