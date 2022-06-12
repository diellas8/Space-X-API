const useTechInfo = ({ name, rocket, engine, isEngine }) => {
    const header = name.toUpperCase();

    const firstRow = {
        title: isEngine? 'NUMBER' : 'HEIGHT',
        value: isEngine? engine.number : rocket.height.meters
    }

    const secondRow = {
        title: isEngine? 'PROPELLANT1' : 'DIAMETER',
        value: isEngine? rocket. propellant_1 : rocket.diameter.meters
    }

    const thirdRow = {
        title: isEngine? 'PROPELLANT2' : 'STAGES',
        value: isEngine? rocket. propellant_2 : rocket.stages,

    }

    const fourthRow = {
        title: isEngine? 'THRUST TO WEIGHT' : 'COST PER LAUNCH',
        value: isEngine? engine.thrust_to_weight : rocket.cost,
    }

    const body = [firstRow, secondRow, thirdRow, fourthRow];

    const img = `../assets/${name.replace(/\\s+/g, '')}.png`

    return {
        header,
        body,
        img,
    }   
}

export default useTechInfo;