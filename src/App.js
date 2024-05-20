import React, {useRef} from 'react'

export default function App() {
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  const content4Ref = useRef(null);
  const content5Ref = useRef(null);
  const content6Ref = useRef(null);

  const onContent1Click = () => {
    content1Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const onContent2Click = () => {
    content2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const onContent3Click = () => {
    content3Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const onContent4Click = () => {
    content4Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const onContent5Click = () => {
    content5Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const onContent6Click = () => {
    content6Ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <ul style={{position: "fixed", top: 0, right: 0, background: 'teal', padding: "20px"}}>
        <li onClick={onContent1Click}>content1</li>
        <li onClick={onContent2Click}>content2</li>
        <li onClick={onContent3Click}>content3</li>
        <li onClick={onContent4Click}>content4</li>
        <li onClick={onContent5Click}>content5</li>
        <li onClick={onContent6Click}>content6</li>
      </ul>

      <div ref={content1Ref} style={{height:'1200px', background: 'skyblue'}}>content1</div>
      <div ref={content2Ref} style={{height:'1200px', background: 'orange'}}>content2</div>
      <div ref={content3Ref} style={{height:'1200px', background: 'gray'}}>content3</div>
      <div ref={content4Ref} style={{height:'1200px', background: 'red'}}>content4</div>
      <div ref={content5Ref} style={{height:'1200px', background: 'green'}}>content5</div>
      <div ref={content6Ref} style={{height:'1200px', background: 'purple'}}>content6</div>
    </div>
  )
}