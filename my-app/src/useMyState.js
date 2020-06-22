
const stateMap = new Map();
export const useState1 = (classCom, initialState) => {
    const _initialState = typeof initialState === 'function' ? initialState() : initialState
   
    // 怎么知道 useState 得到的是对应顺序的 state
    // useState 按顺序依次存储，useState a b c head: a, tail: c
    const states = stateMap.get(classCom)

    const state =  {value: _initialState}

    if(states) {
        const isReRender = states.isReRender
        if(isReRender) {
            const temp = states.cur
            states.cur = states.cur.next
            return [temp.value, _setState(classCom, temp)] 
        }
        if(states.head === states.tail) {
            states.head.next = state
            states.tail = states.head.next
        } else {
            states.tail.next = state
            states.tail = state
        }
        return [states.tail.value, _setState(classCom, state.tail)]
    } else { 
        return _addInitialState(classCom, _initialState) 
    }
}

// 初始添加逻辑
function _addInitialState(classCom, _initialState) {
    stateMap.set(classCom, {})
    const states = stateMap.get(classCom)
    const state = {value: _initialState}
    states.head = state
    states.tail = state
    return [states.tail.value, _setState(classCom, states.tail)]
}

function _setState(classCom, memoriedState) {
    return function(newState) {
        memoriedState.value = newState
        stateMap.get(classCom).isReRender = true
        stateMap.get(classCom).cur = stateMap.get(classCom).head
        classCom.com(classCom.props)
        stateMap.get(classCom).isReRender = false
    }
}
