import { NativeSource } from '../NativeSource'

export class ArnoSource extends NativeSource {
  constructor() {
    super({
      name: 'arno',
      baseUrl: 'https://ar-no.com/',
      version: '0.0.2',
      language: 'ar',
    })
  }
}
