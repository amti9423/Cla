# Tempo

Prosty timer pomodoro na iPhone'a w stylu Liquid Glass. To rodzeństwo Mise: ta sama technika (jedna strona HTML instalowana na ekranie początkowym), szklane panele i typografia, ale cieplejsze, śliwkowe tło i własne kolory faz:

- **Skupienie**: róż i morela
- **Przerwa**: morska zieleń i błękit
- **Długa przerwa**: lila i orchidea

Artefakt: https://claude.ai/artifact/2Rd28jdsLxSbCMrQeAm5Fx

## Co robi i skąd te pomysły

| Funkcja | Wzór |
| --- | --- |
| Jedna duża tarcza, która wizualnie „ubywa”, z kreskami minut | Time Timer, Focus Keeper |
| Godzina zakończenia pod licznikiem („koniec o 14:35”) | Session, pomoc przy ślepocie czasowej |
| „Na czym się teraz skupiasz?”: jedno zadanie na rundę | Flow, Session |
| Kropki rund i długa przerwa co N rund | Pomofocus, Focus Keeper |
| **Tylko 5 minut**: rozruch na trudny start, potem wybór, czy ciągnąć dalej | reguła 5 minut przy ADHD |
| **+5 min**: przedłużenie bez gubienia flow | Session |
| Gotowe rytmy 25/5/15, 50/10/30 i łagodny 15/3/10 | elastyczne interwały przy ADHD |
| Szum brązowy generowany w przeglądarce | Endel, Tide |
| Oddychająca poświata podczas przerwy | Calm, Apple Breathe |
| Seria dni, cel dzienny, wykres 7 dni | Forest, Focus Keeper |
| Cofnij po resecie, pominięciu, zmianie trybu i usunięciu sesji | żeby przypadkowe stuknięcie nie kosztowało postępu |

Licznik liczy od godziny zakończenia, a nie przez odejmowanie sekund. Dzięki temu po powrocie do aplikacji czas zawsze się zgadza. Podczas sesji ekran nie gaśnie, żeby dzwonek zagrał na czas.

## Pliki

- `tempo.html`: źródło publikowane jako artefakt Claude (bez `<head>`, szkielet dokleja platforma). W artefakcie historia i ustawienia synchronizują się między urządzeniami przez bazę artefaktu.
- `index.html`: samodzielna wersja z metatagami iOS i ikoną, generowana z `tempo.html`. Działa offline i zapisuje dane w przeglądarce. Nadaje się do GitHub Pages.
- `icon.html` → `icon-180.png`: ikona na ekran początkowy.
- `build.mjs`: `node build.mjs` odtwarza `index.html` po zmianach w `tempo.html`.

## Instalacja na iPhonie

Otwórz link w Safari, stuknij **Udostępnij**, potem **Do ekranu początkowego**.

Motyw: Auto (jak iPhone), Jasny albo Ciemny, w Ustawieniach → Wygląd.

Dźwięk na iOS: Tempo prosi Safari o kategorię audio „playback” (iOS 17+), więc dzwonek gra także w trybie cichym. Przy zablokowanym ekranie strona nie gra dźwięku, dlatego ekran nie gaśnie w trakcie sesji. W Ustawieniach jest przycisk „Sprawdź dzwonek”.
