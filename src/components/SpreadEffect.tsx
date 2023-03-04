type Props = {
    title: string;
}

function SpreadEffect({ title }: Props) {
  return (
    <div className='titleStyle'>
        {title.split("").map((char, idx) => <p key={idx} className='ilb letter'>{char}</p>)}
    </div>
  )
}

export default SpreadEffect;