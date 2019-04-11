export const updateInformation = (name, value) => {
    return {
        type: 'UPDATE_INFO',
        name, value
    }
}

export const updateAttributes = (attributes) => {
    return {
        type: 'UPDATE_ATTR',
        attributes
    }
}

export const updateBackground = (name, value) => {
    return {
        type: 'UPDATE_BG',
        name, value
    }
}

export const updateOccupation = (code, name) => {
    return {
        type: 'UPDATE_OCC',
        code, name
    }
}

export const updateSkill = (occPts, intPts) => {
    return {
        type: 'UPDATE_SKILLPTS',
        occPts, intPts
    }
}

export const updateSkillPts = (occPts, intPts) => {
    return {
        type: 'UPDATE_SKILLPTS',
        occPts, intPts
    }
}
