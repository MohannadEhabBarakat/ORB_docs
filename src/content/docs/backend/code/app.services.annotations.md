---
title: app.services.annotations
---

<!-- markdownlint-disable -->

<a href="../../../../../../app/services/annotations.py#L0"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

# <kbd>module</kbd> `app.services.annotations`





---

<a href="../../../../../../app/services/annotations.py#L55"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_case_filetree`

```python
get_case_filetree(token: str, dataset_name: str, patient_name: str)
```






---

<a href="../../../../../../app/services/annotations.py#L94"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_my_annotations_filetree`

```python
get_my_annotations_filetree(token: str, annotation_path: str, dataset_name: str)
```






---

<a href="../../../../../../app/services/annotations.py#L113"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_annotations_filetree`

```python
get_annotations_filetree(
    token: str,
    orig_annotation_path: str,
    dataset_name: str
)
```






---

<a href="../../../../../../app/services/annotations.py#L156"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `load_workitem`

```python
load_workitem(token: str, workitem: AnnotatorWorkItem)
```






---

<a href="../../../../../../app/services/annotations.py#L11"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>class</kbd> `FileTreeItem`




<a href="../../../../../../app/services/annotations.py#L12"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `__init__`

```python
__init__(
    name: str,
    url: str = None,
    labels: list['FileTreeItem'] = [],
    items: list['FileTreeItem'] = [],
    type_: str = 'dir'
)
```








---

<a href="../../../../../../app/services/annotations.py#L35"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `getitem`

```python
getitem(keys)
```





---

<a href="../../../../../../app/services/annotations.py#L26"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `to_dict`

```python
to_dict()
```








---

_This file was automatically generated via [lazydocs](https://github.com/ml-tooling/lazydocs)._
