import { TagsRepositories } from '../repositories/TagsRepositories'
import { classToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm'

export class ListTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepositories)

    const tags = await tagsRepository.find()

    return classToPlain(tags)
  }
}
