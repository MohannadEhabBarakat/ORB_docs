---
title: app.routers.annotators
---

<!-- markdownlint-disable -->

<a href="../../../../../../backend/app/routers/annotators.py#L0"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

# <kbd>module</kbd> `app.routers.annotators`





---

<a href="../../../../../../backend/app/routers/annotators.py#L34"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `create_annotator`

```python
create_annotator(data: AnnotatorCreate)
```






---

<a href="../../../../../../backend/app/routers/annotators.py#L53"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `generate_annotators`

```python
generate_annotators(data: GenerateAnnotatorsRequest)
```






---

<a href="../../../../../../backend/app/routers/annotators.py#L154"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_annotator_by_token`

```python
get_annotator_by_token(token: str)
```






---

<a href="../../../../../../backend/app/routers/annotators.py#L165"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `update_annotator_type`

```python
update_annotator_type(token: str, data: AnnotatorTypeUpdate)
```






---

<a href="../../../../../../backend/app/routers/annotators.py#L180"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `delete_annotator`

```python
delete_annotator(token: str)
```






---

<a href="../../../../../../backend/app/routers/annotators.py#L202"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `assign_cases_by_token`

```python
assign_cases_by_token(token: str, data: AssignCasesRequest)
```

Assigns cases (not_started) to the annotator. Overwrites existing cases. 


---

<a href="../../../../../../backend/app/routers/annotators.py#L228"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `assign_review_by_token`

```python
assign_review_by_token(token: str, data: AssignReviewRequest)
```

Assigns annotations from others to review (not_started). Overwrites existing review_list. 


---

<a href="../../../../../../backend/app/routers/annotators.py#L260"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_worklist_by_token`

```python
get_worklist_by_token(token: str)
```

Returns the worklist for the annotator. A worklist is a list of cases to annotate or review. 


---

<a href="../../../../../../backend/app/routers/annotators.py#L274"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_worklist_size_by_token`

```python
get_worklist_size_by_token(token: str, dataset_name: str)
```

Returns the worklist for the annotator. A worklist is a list of cases to annotate or review. 


---

<a href="../../../../../../backend/app/routers/annotators.py#L290"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_worklist_item_by_token`

```python
get_worklist_item_by_token(token: str, idx: int, dataset_name: str)
```

Returns the worklist item for the annotator. 


---

<a href="../../../../../../backend/app/routers/annotators.py#L345"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `update_case_status`

```python
update_case_status(token: str, data: UpdateStatusRequest)
```






---

<a href="../../../../../../backend/app/routers/annotators.py#L366"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `update_annotation_status`

```python
update_annotation_status(token: str, data: UpdateStatusRequest)
```






---

<a href="../../../../../../backend/app/routers/annotators.py#L378"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `update_review_status`

```python
update_review_status(token: str, data: UpdateStatusRequest)
```






---

<a href="../../../../../../backend/app/routers/annotators.py#L399"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `assign_random_by_token`

```python
assign_random_by_token(token: str, data: AssignRandomRequest)
```

Pick `n` random patients from the dataset and assign to this annotator. 


---

<a href="../../../../../../backend/app/routers/annotators.py#L436"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `assign_random_reviews_by_token`

```python
assign_random_reviews_by_token(token: str, data: AssignRandomReviewsRequest)
```

Pick random reviews from other annotators of a specific type. 


---

<a href="../../../../../../backend/app/routers/annotators.py#L528"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_annotators_for_dataset`

```python
get_annotators_for_dataset(dataset_name: str)
```






---

<a href="../../../../../../backend/app/routers/annotators.py#L540"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_label_status`

```python
get_label_status(label_path: str)
```






---

<a href="../../../../../../backend/app/routers/annotators.py#L577"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `update_label_status`

```python
update_label_status(data: LabelStatusUpdate)
```






---

<a href="../../../../../../backend/app/routers/annotators.py#L620"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_annotator`

```python
get_annotator(name: str)
```

Legacy endpoint using annotator name. 


---

<a href="../../../../../../backend/app/routers/annotators.py#L632"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `handle_done`

```python
handle_done(dataset_name: str, token: str, orig_annotation_path: str)
```








---

_This file was automatically generated via [lazydocs](https://github.com/ml-tooling/lazydocs)._
