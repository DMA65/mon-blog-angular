export class Post {
  Title: string
  Content: string
  LoveIts: number
  Created_at: Date

  constructor(title: string, content: string) {
    this.Title = title
    this.Content = content
    this.LoveIts = 0
    this.Created_at = new Date(Date.now())
  }

  loveIts() {
    this.LoveIts++
  }

  dontLoveIts() {
    this.LoveIts--
  }

  getColor() {
    if (this.LoveIts > 0) {
      return 'green'
    } else if (this.LoveIts < 0) {
      return 'red'
    } else return 'black'
  }
}
