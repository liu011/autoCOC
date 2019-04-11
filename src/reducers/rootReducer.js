const initState = {
    information: {
        fakeName: '',
        age: 20,
        sex: '',
        birthplace: '',
        residence: '',
        era: '',
        avatarUrl: ''
    },
    attributes: {
        str: 0,
        con: 0,
        siz: 0,
        dex: 0,
        app: 0,
        int: 0,
        pow: 0,
        edu: 0,
        luck: 0,
    },
    background: {
        personalDescription: '',
        ideologyOrBeliefs: '',
        significantPeople: '',
        meaningfulLocations: '',
        treasuredPossessions: '',
        traits: '',
        injuriesAndScars: '',
        phobiasAndManias: '',
        arcaneTomesSpellsAndArtifacts: '',
        encountersWithStrangeEntities: ''
    },
    occupation: {
        occupationCode: '',
        occupationName: ''
    },
    skillPts: {
        occPts: 0,
        intPts: 0
    },
    skills: [
        {
            "skillName": '会计',
            "init": 5,
            "occAdd": 0,
            "intAdd": 0,
            "growth": 0,
            "total": 5
        },
        {
            "skillName": '人类学',
            "init": 1,
            "occAdd": 0,
            "intAdd": 0,
            "growth": 0,
            "total": 1
        },
        {
            "skillName": '估价',
            "init": 5,
            "occAdd": 0,
            "intAdd": 0,
            "growth": 0,
            "total": 5
        }
    ],
    genderOptions: ['男', '女', '未知'],
    occupationOptions: [
        {
            name: '古文物学家/古董收藏家',
            occPts: ['edu']
        },
        {
            name:'艺术家',
            occPts: ['dex', 'pow']
        },
        {
            name: '运动员',
            occPts: ['dex', 'str']
        },
        {
            name: '作家',
            occPts: ['edu']
        },
        {
            name: '神职人员',
            occPts: ['edu']
        }
    ]
}

const rootReducer = (state = initState, action) => {
    console.log('action:');
    console.log(action);
    if (action.type === 'UPDATE_INFO') {
        return {
            ...state,
            information: {...state.information, [action.name]: action.value}
        }
    }else if (action.type === 'UPDATE_ATTR') {
        return {
            ...state,
            attributes: action.attributes
        }
    }else if (action.type === 'UPDATE_BG') {
        return {
            ...state,
            background: {...state.background, [action.name]: action.value}
        }
    }else if (action.type === 'UPDATE_OCC') {
        return {
            ...state,
            occupation: {occupationCode: action.code, occupationName: action.name}
        }
    }else if (action.type === 'UPDATE_SKILL') {
        return {
            ...state,
            skills: [...state.skills, {
                ...state.skills[0],
                occAdd: action.occPts,
                intAdd: action.intPts,
                total: action.occPts + action.intPts
            }]
        }
    }else if (action.type === 'UPDATE_SKILLPTS') {
        return {
            ...state,
            skillPts: {
                occPts: action.occPts,
                intPts: action.intPts
            }
        }
    }
    return state;
}

export default rootReducer;