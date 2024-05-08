import {Component} from 'react'
import {
  Input,
  Label,
  Heading,
  Container,
  MainContainer,
  InputContainer,
  GenerateButton,
  SelectInput,
  ImageContainer,
  Text,
  Form,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    bgImage: '',
    topTitle: '',
    bottomTitle: '',
    font: 8,
  }

  changeMeme = e => {
    e.preventDefault()
    const {imgUrl, topText, bottomText, fontSize} = this.state
    console.log(imgUrl, topText, bottomText, fontSize)
    this.setState({
      bgImage: imgUrl,
      topTitle: topText,
      bottomTitle: bottomText,
      font: fontSize,
    })
  }

  changeTopText = props => {
    this.setState({topText: props.target.value})
  }

  changeBottomText = props => {
    this.setState({bottomText: props.target.value})
  }

  changeFontSize = props => {
    this.setState({fontSize: props.target.value})
  }

  changeImageUrl = props => {
    this.setState({imgUrl: props.target.value})
  }

  render() {
    const {font, fontSize, bgImage, topTitle, bottomTitle} = this.state
    console.log(font, fontSize, bgImage, topTitle, bottomTitle)
    return (
      <MainContainer>
        <Container>
          <Heading>Meme Generator</Heading>
          <Form onSubmit={this.changeMeme}>
            <InputContainer>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                type="text"
                id="imageUrl"
                placeholder="Enter the Image URL"
                onChange={this.changeImageUrl}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="topTex">Top Text</Label>
              <Input
                type="text"
                id="topTex"
                placeholder="Enter the Top Text"
                onChange={this.changeTopText}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="bottomTex">Bottom Text</Label>
              <Input
                type="text"
                id="bottomTex"
                placeholder="Enter the Bottom Text"
                onChange={this.changeBottomText}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="fontSize">Font Size</Label>
              <SelectInput
                value={fontSize}
                id="fontSize"
                placeholder="Enter the Image URL"
                onChange={this.changeFontSize}
              >
                {fontSizesOptionsList.map(each => (
                  <option key={each.optionId}>{each.displayText}</option>
                ))}
              </SelectInput>
            </InputContainer>
            <GenerateButton type="submit">Generate</GenerateButton>
          </Form>
        </Container>
        <Container>
          <ImageContainer image={bgImage} data-testid="meme">
            <Text size={font}>{topTitle}</Text>
            <Text size={font}>{bottomTitle}</Text>
          </ImageContainer>
        </Container>
      </MainContainer>
    )
  }
}

export default MemeGenerator
