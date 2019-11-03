## A template for Grafana & Prometheus with Docker-Compose

---

### Servers layout
* **web**: localhost:5000
* **prometheus**: localhost:9090
* **grafana**: localhost:3000

#### The Steps
* ```docker-compose up```
* Enter the grafana (http://localhost:3000) with **admin** (password: **pass**) account.
* Add a new data source of **Prometheus** by the paths **Configuration** -> **Data Source**
* Confirm the URL is **http://localhost:9000** and Access is **Browser**, then click the **Save & Test** button.
* Add the new dashboard by **Add Query**, then type the following setting:
  * Query -> **Prometheus**
  * Metrics Name => **request_counts**
* Save the query as dashboard.

#### Remove entirely
```
docker-compose down -v
```
