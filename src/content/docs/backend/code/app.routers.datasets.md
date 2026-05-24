---
title: app.routers.datasets
---

<!-- markdownlint-disable -->

<a href="../../../../../../app/routers/datasets.py#L0"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

# <kbd>module</kbd> `app.routers.datasets`





---

<a href="../../../../../../app/routers/datasets.py#L16"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_all_datasets`

```python
get_all_datasets()
```






---

<a href="../../../../../../app/routers/datasets.py#L45"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `create_dataset`

```python
create_dataset(dataset: DatasetCreate)
```






---

<a href="../../../../../../app/routers/datasets.py#L58"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_dataset`

```python
get_dataset(name: str)
```






---

<a href="../../../../../../app/routers/datasets.py#L88"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `delete_dataset`

```python
delete_dataset(name: str)
```






---

<a href="../../../../../../app/routers/datasets.py#L107"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `upload_to_dataset`

```python
upload_to_dataset(name: str, file: UploadFile = File(PydanticUndefined))
```






---

<a href="../../../../../../app/routers/datasets.py#L134"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_dataset_files`

```python
get_dataset_files(name: str)
```






---

<a href="../../../../../../app/routers/datasets.py#L168"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_dataset_labels`

```python
get_dataset_labels(name: str)
```






---

<a href="../../../../../../app/routers/datasets.py#L180"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `update_dataset_labels`

```python
update_dataset_labels(name: str, labelsmap: List[dict])
```






---

<a href="../../../../../../app/routers/datasets.py#L191"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_survey_schema`

```python
get_survey_schema(name: str)
```






---

<a href="../../../../../../app/routers/datasets.py#L200"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `update_survey_schema`

```python
update_survey_schema(name: str, body: dict)
```






---

<a href="../../../../../../app/routers/datasets.py#L211"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `validate_formio_submission`

```python
validate_formio_submission(schema_components: list, submission_data: dict)
```






---

<a href="../../../../../../app/routers/datasets.py#L235"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_survey_response`

```python
get_survey_response(name: str, label_path: str)
```






---

<a href="../../../../../../app/routers/datasets.py#L247"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `submit_survey_response`

```python
submit_survey_response(name: str, label_path: str, body: dict)
```






---

<a href="../../../../../../app/routers/datasets.py#L274"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `download_all_survey_responses`

```python
download_all_survey_responses(name: str)
```

Download all survey responses for a dataset as a JSON file. 




---

_This file was automatically generated via [lazydocs](https://github.com/ml-tooling/lazydocs)._
