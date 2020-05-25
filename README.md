# Vodafone coding challenge

## Example usage

### Error

#### No Stock

```js
getProcessingPage([{ state: "processing" }, { state: "error", errorCode: "NO_STOCK" }]).then((result) =>
  console.log(`Logging result: ${JSON.stringify(result)}`)
);
```

will return the following after two seconds of processing time

```js
{
  "title": "Error page",
  "message": "No stock has been found"
}
```

#### Incorrect Details

```js
getProcessingPage([{ state: "processing" }, { state: "error", errorCode: "INCORRECT_DETAILS" }]).then((result) => {
  console.log(`Logging result: ${JSON.stringify(result)}`);
});
```

will return the following after two seconds of processing time

```js
{
  "title": "Error page",
  "message": "Incorrect details have been entered"
}
```

#### Other Errors

```js
getProcessingPage([{ state: "processing" }, { state: "error" }]).then((result) => {
  console.log(`Logging result: ${JSON.stringify(result)}`);
});
```

will return the following after two seconds of processing time

```js
{
  "title": "Error page",
  "message": null
}
```

### Success

```js
getProcessingPage([{ state: "processing" }, { state: "success" }]).then((result) => {
  console.log(`Logging result: ${JSON.stringify(result)}`);
});
```

will return the following after two seconds of processing time

```js
{
  "title": "Order complete",
  "message": null
}
```
