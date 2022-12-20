function Selection1(props) {
    return (
        <div>
            <select>
                {props.cities.map((city) => (
                    <option key={city.id} value={city.id}>
                        {city.name}
                    </option>

                ) )}
            </select>
        </div>
    );
}

export default Selection1


