## 과제 : 인공지능에서 원-핫 인코딩에 대해 조사

### 원-핫 인코딩이란

자연어 처리에서 문자를 숫자로 바꾸는 기법들 중 원-핫 인코딩은 기본적인 표현 방법이며, 머신 러닝과 딥 러닝을 하기 위해서는 반드시 알아야 하는 방법이다. 원-핫 인코딩은 단어의 크기를 벡터의 차원으로 하여 표현하고 싶은 단어의 인덱스에 1을 부여하고 다른 인덱스에 0을 부여하여 단어를 벡터로 표현하는 방식을 말한다. 

#### Keras를 이용한 원-핫 인코딩

케라스는 원-핫 인코딩을 수행할 수 있는 도구 `to_categorical()`을 지원한다. 

```
text = "케라스를 이용한 원 핫 인코딩"
```

위 문장을 케라스 토크나이저를 이용해 정수 인코딩을 한다.

```python
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.utils import to_categorical

text = "케라스를 이용한 원 핫 인코딩"

tokenizer = Tokenizer()
tokenizer.fit_on_texts([text])
print("단어 집합 :", tokenizer.word_index)

# 단어 집합 : {'케라스를': 1, '이용한': 2, '원': 3, '핫': 4, '인코딩': 5}
```

이제 위와 같이 생성된 단어 집합으로 구성된 텍스트가 있을 때, `texts_to_sequences()`를 통해서 정수 시퀀스로 변환 가능하다.

```python
text2 = "케라스 원 핫 인코딩"
encoded = tokenizer.texts_to_sequences([text2])[0]
print(encoded)

# [3, 4, 5]
```

정수 인코딩 된 결과를 가지고 케라스는 원-핫 인코딩을 진행할 수 있다. `to_categorical()`를 이용하면 된다.

```python
one_hot = to_categorical(encoed)
print(one_hot)

"""
[[0. 0. 0. 1. 0. 0.] 인덱스 3의 원-핫 벡터
 [0. 0. 0. 0. 1. 0.] 인덱스 4의 원-핫 벡터
 [0. 0. 0. 0. 0. 1.]] 인덱스 5의 원-핫 벡터
"""
```



### 참고 자료

[02-08 원-핫 인코딩(One-Hot Encoding) - 딥 러닝을 이용한 자연어 처리 입문 (wikidocs.net)](https://wikidocs.net/22647)