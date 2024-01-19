function GlobalBtn({text, borderColor, textColor, backgroundColor}) {
    const umumiyStil = {
        border: `2px solid ${borderColor}`,
        color: textColor,
        backgroundColor
    };
    
    return (
        <button style={umumiyStil} className="globalBtn">{text}</button>
    )
}

export default GlobalBtn