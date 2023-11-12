function getUniqueBeanTypes(data) {
    const uniqueBeanTypes = [];
    data.forEach(counter => {
        if (!uniqueBeanTypes.includes(counter.bean)) {
            uniqueBeanTypes.push(counter.bean);
        }
    });
    return uniqueBeanTypes;
}

function sortCountersByName(data) {
    return data.slice().sort((a, b) => a.bean.localeCompare(b.bean));
}

function filterCountersByBeanType(data, beanType) {
    return data.filter(counter => counter.bean === beanType);
}

function getTotalBeansCount(data) {
    return data.reduce((total, counter) => total + counter.count, 0);
}

function createOrderedListsForBeans(counters) {
    const uniqueBeanTypes = getUniqueBeanTypes(counters);

    uniqueBeanTypes.forEach(beanType => {
        const filteredCounters = filterCountersByBeanType(counters, beanType);
        const totalBeansCount = getTotalBeansCount(filteredCounters);

        filteredCounters.sort((a, b) => a.name.localeCompare(b.name));
        
        const beanList = document.createElement('ol');
        beanList.innerHTML = `<h2>${beanType} (${totalBeansCount})`;

        filteredCounters.forEach(counter => {
            const listItem = document.createElement('li');
            listItem.textContent = `${counter.name} (${counter.count})`;
            beanList.appendChild(listItem);
        });

        document.body.appendChild(beanList);
    });
}

createOrderedListsForBeans(counters);

