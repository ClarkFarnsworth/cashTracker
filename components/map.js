import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-map/api';
import usePlacesAutocomplete, { getGeocode, getLatLng,} from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption,} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useState } from 'react';


export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
        libraries: ["places"],
    });


    if (!isLoaded) return <div>Loading...</div>;
    return <Map />
}

function Map() { 
    const center = useMemo(() => ({lat:44, lng: -80}), []);
    const [selected, setSelected] = useState(null);

    return ( 
        <div>
            <div className='places-container'>
                <usePlacesAutocomplete setSelected={setSelected} />
             </div>

            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                {selected && <Marker postion={selected} />}
            </GoogleMap>

        </div>

    );
}

const PlacesAutocomplete = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (val) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const {lat, lng} = await getLatLng(results[0]);
        setSelected({lat, lng});

    }

    return <Combobox onSelect={handleSelect} >
        <ComboboxInput 
            value={value} 
            onchange={e => setvalue(e.target.value)} 
            disabled={!ready} 
            className="combobox-input" 
            placeholder="Search address" 
        />
        <ComboboxPopover>
            <ComboboxList>
                {status === "OK" && data.map(({place_id, description}) => ( 
                <ComboboxOption key={place_id}value={description} />
                ))}
            </ComboboxList>
        </ComboboxPopover>

        
    </Combobox>
}
    