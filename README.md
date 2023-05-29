# Demo Castle Adventures - Gra Point and Click

Castle Adventures to prosta gra typu "point and click", stworzona przy użyciu HTML, CSS, JavaScript i PHP. Gra oferuje rozgrywkę opartą na eksploracji zamku, rozwiązywaniu zagadek i interakcji z postaciami.

## Zawartość

- [Instrukcje instalacji](#instrukcje-instalacji)
- [Instrukcje uruchamiania](#instrukcje-uruchamiania)
- [Opis gry](#opis-gry)
- [Struktura plików](#struktura-plików)
- [Autorzy](#autorzy)
- [Licencja](#licencja)

## Instrukcje instalacji

Aby zainstalować i uruchomić grę Castle Adventures, należy postępować zgodnie z poniższymi krokami:
1. Sklonuj repozytorium na swoje urządzenie lokalne:
2. Przejdź do katalogu gry:
3. Uruchom odpowiedni serwer lokalny, np. XAMPP lub WampServer.

## Instrukcje uruchamiania

Po zainstalowaniu i uruchomieniu serwera lokalnego, postępuj zgodnie z poniższymi instrukcjami, aby uruchomić grę:

1. Uruchom przeglądarkę internetową.
2. Wprowadź następujący adres URL: http://localhost/castle-adventures/index.php
3. Gra Castle Adventures zostanie załadowana w przeglądarce.

## Opis gry

Castle Adventures to gra typu "point and click", w której gracz wciela się w postać odkrywcy przemierzającego tajemniczy zamek. Celem gry jest rozwiązanie zagadek i osiągnięcie wyznaczonych celów w poszczególnych scenach.

### Funkcje gry

- Muzyka: Gra posiada tło muzyczne.
- Ekwipunek: Gracz ma możliwość zbierania przedmiotów i przechowywania ich w ekwipunku. Ekwipunek jest zapisywany w sesji, co pozwala na zachowanie stanu gry podczas przemieszczania się między scenami.
- Mapa i sceny: Gra składa się z 4 różnych scen, które można eksplorować. Każda scena ma swoją unikalną mapę, która pomaga graczowi orientować się w świecie gry.
- Postacie: W grze występuje 8 różnych postaci, z którymi gracz może interakcjonować. Każda postać ma swoje unikalne cechy i zadania do wykonania.
- Poruszanie się po ekranie: Gracz może poruszać się po ekranie, klikając na odpowiednie znaki lub obszary, co umożliwia eksplorację zamku i przechodzenie między różnymi scenami.

### Automatyczne zapisywanie i wczytywanie przebiegu

Gra Castle Adventures automatycznie zapisuje i wczytuje przebieg gracza, eliminując potrzebę ręcznego zapisywania i wczytywania ekwipunku. Dzięki temu, gracz może kontynuować grę od ostatnio zapisanego stanu bez konieczności wykonywania dodatkowych kroków.

W celu zapewnienia wygody i płynności rozgrywki, gra Castle Adventures automatycznie zapisuje postęp gracza w tle, gwarantując, że żadne osiągnięcia czy zebrane przedmioty nie zostaną utracone. Po ponownym uruchomieniu gry, wczytany zostanie ostatni zapisany stan, umożliwiając kontynuację przygody od tego punktu.

Dzięki temu mechanizmowi, gracze mogą cieszyć się grą Castle Adventures bez konieczności manualnego zarządzania zapisami i wczytywaniem stanu gry.

### Mechanizm czyszczenia ekwipunku

W grze Castle Adventures istnieje również mechanizm czyszczenia ekwipunku gracza. Aby oczyścić ekwipunek, gracz może skorzystać z pliku `clean.php`, który usuwa wszystkie przedmioty z ekwipunku.

## Struktura plików
- audio
    - music.mp3
- css
    - style.css
- img
- js
    - startgame.js
- README.md
- clean.php
- index.php
- load.php
- save.php
- start.php

## Autorzy

- [Cezary Śliwiński](https://github.com/czareks) - Główny programista

## Licencja

Ten projekt jest udostępniany na licencji MIT License. Szczegółowe informacje można znaleźć w pliku LICENSE.
