---
title: app.routers.annotations
---

<!-- markdownlint-disable -->

<a href="../../../../../../app/routers/annotations.py#L0"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

# <kbd>module</kbd> `app.routers.annotations`





---

<a href="../../../../../../app/routers/annotations.py#L18"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `create_annotation`

```python
create_annotation(data: AnnotationCreate)
```






---

<a href="../../../../../../app/routers/annotations.py#L35"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `upload_batch`

```python
upload_batch(
    by: str = Form(PydanticUndefined),
    dataset_name: str = Form(PydanticUndefined),
    status: str = Form(None),
    file: UploadFile = File(PydanticUndefined)
)
```

Upload a batch of annotations by one annotator 


---

<a href="../../../../../../app/routers/annotations.py#L135"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `upload_single_file`

```python
upload_single_file(
    by: str = Form(PydanticUndefined),
    base: str = Form(PydanticUndefined),
    path: str = Form(PydanticUndefined),
    dataset_name: str = Form(PydanticUndefined),
    file: UploadFile = File(PydanticUndefined)
)
```






---

<a href="../../../../../../app/routers/annotations.py#L168"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_annotation`

```python
get_annotation(id: str)
```






---

<a href="../../../../../../app/routers/annotations.py#L178"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_all_annotations_for_dataset`

```python
get_all_annotations_for_dataset(name: str)
```






---

<a href="../../../../../../app/routers/annotations.py#L188"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_case_file`

```python
get_case_file(dataset_name: str, file_path: str)
```






---

<a href="../../../../../../app/routers/annotations.py#L201"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_label_file`

```python
get_label_file(dataset_name: str, label_path: str)
```






---

<a href="../../../../../../app/routers/annotations.py#L221"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `upload_mask`

```python
upload_mask(
    label_path: str = Form(PydanticUndefined),
    dataset_name: str = Form(None),
    status: str = Form(None),
    file: UploadFile = File(PydanticUndefined)
)
```






---

<a href="../../../../../../app/routers/annotations.py#L272"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `download_all_annotations`

```python
download_all_annotations(dataset_name: str = None)
```

Zip the entire annotations directory and return as a downloadable zip. 


---

<a href="../../../../../../app/routers/annotations.py#L305"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_all_annotation_tags`

```python
get_all_annotation_tags(dataset_name: str = None)
```

Return every document in the annotations collection (annotation_path + tags). 


---

<a href="../../../../../../app/routers/annotations.py#L319"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `add_tag_to_annotation`

```python
add_tag_to_annotation(data: TagUpdateRequest)
```

Add a tag to an annotation. Creates the doc if it doesn't exist. 


---

<a href="../../../../../../app/routers/annotations.py#L345"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `remove_tag_from_annotation`

```python
remove_tag_from_annotation(data: TagUpdateRequest)
```

Remove a tag from an annotation. 


---

<a href="../../../../../../app/routers/annotations.py#L364"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `download_annotation`

```python
download_annotation(dataset_name: str, annotation_path: str)
```

Download the .nii.gz file for a specific annotation. 




---

_This file was automatically generated via [lazydocs](https://github.com/ml-tooling/lazydocs)._
