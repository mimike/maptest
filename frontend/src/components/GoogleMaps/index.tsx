
import React, { useEffect, useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles , createStyles, Theme} from "@material-ui/core/styles";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";
//import Loader from "react-loader-spinner";
import { useDispatch} from "react-redux";
import { fetchGeocoder } from "../../store/hotels";

// const useStyles = makeStyles((theme: Theme) => ({
//   icon: {
//     color: theme.palette.text.secondary,
//     marginRight: theme.spacing(2),
//   },
// }));


function loadScript(src: string, position: HTMLLinkElement, id: string) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

interface LocationType {
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings: [
      {
        offset: number;
        length: number;
      },
    ];
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
function GoogleMaps() {
  const classes = useStyles();
  const [value, setValue] = useState<LocationType | null>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const [options, setOptions] = useState<LocationType[]>([])
  const loaded = useRef(false);
  const dispatch = useDispatch();
  //const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchGeocoder(value));
  };

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDztJTZmlpuFXqV1NQRAeKJNSmpk54-bzE&libraries=places",
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      throttle((request: { input: string}, callback: (results?: PlaceType[]) => void) => {
        (autocompleteService.current as any).getPlacePredictions(request, callback);
      }, 200),
    []
  );

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current =
        new (window as any).google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results?: LocationType[]) => {
      if (active) {
        let newOptions = [] as LocationType[];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  // const handleHotelSearch = (option) => {
  //   console.log("options", option);
  //   // console.log("parts!", parts[0].text +parts[1].text)
  //   console.log(
  //     "options!",
  //     option.structured_formatting.secondary_text.split(", ")
  //   );

  //   setLoading(true);
  //   return test(option)
  //   // dispatch(fetchGeocoder(option.description)).then(() => {
  //   //   setLoading(false);
  //   // });
  // }

  //we need option.description to get the address.
  return (
    <>
      <form style={{background:"white"}}onSubmit={handleSearch}>
        <Autocomplete

          id="google-map-demo"
          style={{ width: 300 }}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.description
          }
          filterOptions={(x) => x}
          options={options}
          autoComplete
          includeInputInList
          filterSelectedOptions
          value={value}
          onChange={(event, newValue) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter a destination"
              variant="outlined"
              fullWidth
            />
          )}
          renderOption={(option) => {
            const matches =
              option.structured_formatting.main_text_matched_substrings;
            const parts = parse(
              option.structured_formatting.main_text,
              matches.map((match) => [
                match.offset,
                match.offset + match.length,
              ])
            );

            return (
              <div
                style={{ width: "100%" }}
                onClick={() => dispatch(fetchGeocoder(option.description))}
              >
                <Grid container alignItems="center">
                  <Grid item>
                    <LocationOnIcon className={classes.icon} />
                  </Grid>

                  <Grid item xs>
                    {parts.map((part, index) => (
                      <span
                        key={index}
                        style={{ fontWeight: part.highlight ? 700 : 400 }}
                      >
                        {part.text}
                      </span>
                    ))}

                    <Typography variant="body2" color="textSecondary">
                      {option.structured_formatting.secondary_text}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            );
          }}
        />
      </form>
    </>
  );
}
export default GoogleMaps;
